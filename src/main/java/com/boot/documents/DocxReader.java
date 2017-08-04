package com.boot.documents;

import org.apache.log4j.Level;
import org.apache.log4j.LogManager;
import org.apache.poi.xwpf.converter.pdf.PdfConverter;
import org.apache.poi.xwpf.converter.pdf.PdfOptions;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.docx4j.Docx4J;
import org.docx4j.convert.out.pdf.viaXSLFO.PdfSettings;
import org.docx4j.fonts.IdentityPlusMapper;
import org.docx4j.fonts.Mapper;
import org.docx4j.fonts.PhysicalFont;
import org.docx4j.fonts.PhysicalFonts;
import org.docx4j.openpackaging.packages.WordprocessingMLPackage;

import java.io.*;
import java.util.Collections;
import java.util.List;
import java.util.logging.Logger;

/**
 * Created by avinashvundyala on 26/07/17.
 */
public class DocxReader implements IDocumentReader  {

//    public void convertToPdf(String inputFile, String outputFile) throws IOException {
//        try {
//            InputStream is = new FileInputStream(new File(inputFile));
//            WordprocessingMLPackage wordMLPackage = WordprocessingMLPackage.load(is);
//            List sections = wordMLPackage.getDocumentModel().getSections();
//            for (int i = 0; i < sections.size(); i++) {
//                wordMLPackage.getDocumentModel().getSections().get(i)
//                        .getPageDimensions();
//            }
//            Docx4J.toPDF(wordMLPackage, new FileOutputStream(outputFile));
//            System.out.println("DONE!!");
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

    public void convertToPdf(String inputFile, String outputFile) throws IOException {
        FileInputStream fInputStream = new FileInputStream(new File(inputFile));
        XWPFDocument document = new XWPFDocument(fInputStream);

        File outFile;
        outFile = new File(outputFile);
        final boolean mkdirs = outFile.getParentFile().mkdirs();

        OutputStream out = new FileOutputStream(outFile);
        PdfOptions options = PdfOptions.create().fontEncoding("windows-1250");
        PdfConverter.getInstance().convert(document, out, options);
        System.out.println("Success");
    }
}
