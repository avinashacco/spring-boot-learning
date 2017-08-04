package com.boot.documents;

import java.io.IOException;

/**
 * Created by avinashvundyala on 26/07/17.
 */
public interface IDocumentReader {

    public void convertToPdf(String inputFile, String outputFile) throws IOException;
}
