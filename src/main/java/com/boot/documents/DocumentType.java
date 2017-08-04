package com.boot.documents;

/**
 * Created by avinashvundyala on 27/07/17.
 */
public enum DocumentType {
    DOCX(".docx"),
    DOC(".doc"),
    XLSX(".xlsx"),
    XLS(".xls");

    private String fileExtension;

    DocumentType(String fileExtension) {
        this.fileExtension = fileExtension;
    }

    public DocumentType getTypeFromExtension(String fileExtension) {
        switch (fileExtension) {
            case ".docx":
                return DOCX;
            case ".docs":
                return DOC;
            case ".xlsx":
                return XLSX;
            case ".xls":
                return XLS;
            default:
                return null;
        }
    }

}
