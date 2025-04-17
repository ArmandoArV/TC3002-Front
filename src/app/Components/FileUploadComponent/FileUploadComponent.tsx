"use client";

import React, { useRef, useState } from "react";
import styles from "./FileUploadComponent.module.css";
import uploadIcon from "../../Assets/Images/uploadIcon.png";
import confirmationIcon from "../../Assets/Images/confirmationIcon.png";

interface FileUploadProps {
  label?: string;
  onFileSelect: (file: File | null) => void;
  className?: string;
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  id?: string;
  accept?: string;
  maxSizeMB?: number;
}

const FileUploadComponent: React.FC<FileUploadProps> = ({
  label = "",
  onFileSelect,
  className = "",
  labelClassName = "",
  labelStyle = {},
  style = {},
  id = "",
  accept = "image/png, image/jpeg, image/jpg",
  maxSizeMB = 20,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): boolean => {
    // Check file type
    const validTypes = accept.split(", ");
    if (!validTypes.includes(file.type)) {
      setError(`Formato no soportado. Use: ${accept}`);
      return false;
    }

    // Check file size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`El archivo excede el límite de ${maxSizeMB}MB`);
      return false;
    }

    setError(null);
    return true;
  };

  const handleFile = (file: File | null) => {
    if (file && !validateFile(file)) {
      setUploadedFile(null);
      onFileSelect(null);
      return;
    }

    setUploadedFile(file);
    onFileSelect(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(event.target.files?.[0] || null);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedFile(null);
    onFileSelect(null);
    setError(null);
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
    handleFile(e.dataTransfer.files?.[0] || null);
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
            <span className={styles.uploadedFileName}>
              {uploadedFile.name}
            </span>
            <img
              src={confirmationIcon.src}
              alt="Confirmation"
              className={styles.confirmationIcon}
            />
            <button
              className={styles.deleteButton}
              onClick={handleDelete}
            >
              ×
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
              {accept.replace(/image\//g, "").replace(/, /g, ", ")}. Máx {maxSizeMB}MB.
            </span>
          </>
        )}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.fileInputHidden}
          id={id}
          accept={accept}
        />
      </div>
      
      {error && (
        <div className={styles.errorMessage}>
          {error}
        </div>
      )}
    </div>
  );
};

export default FileUploadComponent;