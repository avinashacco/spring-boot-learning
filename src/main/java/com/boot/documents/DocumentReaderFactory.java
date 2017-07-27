package com.boot.documents;

/**
 * Created by avinashvundyala on 26/07/17.
 */
public class DocumentReaderFactory {


    public static IDocumentReader getReader(DocumentType type) {
        switch (type) {
            case DOC:
                return new DocReader();
            case DOCX:
                return new DocReader();
            default:
                throw new IllegalArgumentException("Unknown file format");
        }
    }


}
