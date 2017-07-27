package com.boot.documents;

/**
 * Created by avinashvundyala on 27/07/17.
 */
public enum DocumentType {
    DOCX(".docx"),
    DOC(".doc");

    private String fileExtension;

    DocumentType(String fileExtension) {
        switch (fileExtension) {
            case "":
                new String();
        }
    }

}
