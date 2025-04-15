"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import FileUploadComponent from "./Components/FileUploadComponent/FileUploadComponent";

export default function Home() {
  const handleFileSelect = (file: File | null) => {
    console.log("Selected file:", file);
  };
  return (
    <div className={styles["main"]}>
      <div className={styles["leftContainer"]}>
      <FileUploadComponent onFileSelect={handleFileSelect} />
      </div>
      <div className={styles["rightContainer"]}></div>
    </div>
  );
}
