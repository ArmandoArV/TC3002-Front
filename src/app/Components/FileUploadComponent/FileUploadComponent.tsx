"use client";

import React, { useRef, useState } from "react";
import styles from "./FileUploadComponent.module.css";
import uploadIcon from "../../Assets/Images/uploadIcon.png"; // Replace with actual cloud icon
import confirmationIcon from "../../Assets/Images/confirmationIcon.png"; // Replace with your confirmation icon

interface FileUploadProps {
  label?: string;
  onFileSelect: (file: File | null) => void;
  className?: string;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  id?: string;
}

const FileUploadComponent: React.FC<FileUploadProps> = ({
  label = "",
  onFileSelect,
  className = "",
  labelClassName = "",
  labelStyle = {},
  style = {},
  id = "",
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setUploadedFile(file);
    onFileSelect(file);
  };

  const handleDelete = () => {
    setUploadedFile(null);
    onFileSelect(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0] || null;
    if (file) {
      setUploadedFile(file);
      onFileSelect(file);
    }
  };

  return (
    <div className={styles.inputContainer} style={style}>
      {label && (
        <label
          className={`${styles.label} ${labelClassName}`}
          style={labelStyle}
        >
          {label}
        </label>
      )}

      <div
        className={`${styles.fileUploadWrapper} ${
          dragActive ? styles.dragActive : ""
        } ${className}`}
        onClick={handleClick}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
      >
        {uploadedFile ? (
          <div className={styles.uploadedFileContainer}>
            <span className={styles.uploadedFileName}>{uploadedFile.name}</span>
            <img
              src={confirmationIcon.src}
              alt="Confirmation"
              className={styles.confirmationIcon}
            />
            <button
              className={styles.deleteButton}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
            >
              X
            </button>
          </div>
        ) : (
          <>
            <img
              src={uploadIcon.src}
              alt="Upload"
              className={styles.uploadIcon}
            />
            <span className={styles.uploadText}>
              Selecciona la imagen o arrástrala aquí
            </span>
            <span className={styles.uploadHint}>
              PNG, JPEG, JPG. Máx 20 MB.
            </span>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.fileInputHidden}
          id={id}
        />
      </div>
    </div>
  );
};

export default FileUploadComponent;
