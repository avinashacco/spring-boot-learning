package com.boot.documents;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.ImageType;
import org.apache.pdfbox.rendering.PDFRenderer;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.net.URL;

import org.apache.pdfbox.tools.imageio.ImageIOUtil;
import org.apache.pdfbox.util.*;
import java.nio.file.Paths;

/**
 * Created by avinashvundyala on 28/07/17.
 */
public class MainTesting {

    public static void main(String args[]) {

//        try {
//            String fileBasePath = Paths.get(".").toAbsolutePath().normalize().toString();
//            PDDocument document = PDDocument.load(new File(fileBasePath + "/src/main/java/com/boot/documents/inputFiles/sample.pdf"));
//            PDFRenderer pdfRenderer = new PDFRenderer(document);
//            String outputFile = fileBasePath + "/tmp/Skills";
//            for (int page = 0; page < document.getNumberOfPages(); ++page) {
//                System.out.println(page);
//                BufferedImage bim = pdfRenderer.renderImageWithDPI(page, 300, ImageType.RGB);
//
//                // suffix in filename will be used as the file format
//                ImageIOUtil.writeImage(bim, "sample-" + (page + 1) + ".png", 300);
//            }
//            document.close();
//        } catch (IOException ex) {
//            ex.printStackTrace();
//        }


        IDocumentReader reader = DocumentReaderFactory.getReader(DocumentType.DOC);
        try {
            String fileBasePath = Paths.get(".").toAbsolutePath().normalize().toString();
            System.out.println(fileBasePath + "/tmp/Skills.pdf");
            reader.convertToPdf(fileBasePath + "/src/main/java/com/boot/documents/inputFiles/Skills.doc", fileBasePath + "/tmp/Skills.pdf");
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
