package com.boot.documents;

import org.apache.poi.xwpf.usermodel.XWPFDocument;

import java.io.*;

import org.apache.poi.xwpf.converter.pdf.PdfConverter;
import org.apache.poi.xwpf.converter.pdf.PdfOptions;
import org.apache.poi.xwpf.usermodel.XWPFDocument;

/**
 * Created by avinashvundyala on 26/07/17.
 */
public class DocReader implements IDocumentReader {

    public static void convert() throws IOException {
        String filePath = "C:/Users/manos_t/Desktop/777.docx";
        FileInputStream fInputStream = new FileInputStream(new File(filePath));
        XWPFDocument document = new XWPFDocument(fInputStream);

        File outFile;
        outFile = new File("./tmp/sample.pdf");
        final boolean mkdirs = outFile.getParentFile().mkdirs();

        OutputStream out = new FileOutputStream(outFile);
        PdfOptions options = PdfOptions.create().fontEncoding("windows-1250");
        PdfConverter.getInstance().convert(document, out, options);
        System.out.println("Success");
    }
}
