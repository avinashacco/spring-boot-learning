package com.boot.documents;

import org.apache.fop.apps.Fop;
import org.apache.fop.apps.FopFactory;
import org.apache.fop.apps.MimeConstants;
import org.apache.poi.hwpf.HWPFDocument;
import org.apache.poi.hwpf.converter.WordToFoConverter;
import org.apache.poi.util.XMLHelper;
import org.apache.poi.xwpf.usermodel.XWPFDocument;

import java.io.*;
import java.nio.charset.StandardCharsets;

import org.apache.poi.xwpf.converter.pdf.PdfConverter;
import org.apache.poi.xwpf.converter.pdf.PdfOptions;
import org.xml.sax.SAXException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.*;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.stream.StreamResult;
import javax.xml.transform.stream.StreamSource;

/**
 * Created by avinashvundyala on 26/07/17.
 */
public class DocReader implements IDocumentReader {

    public void generatePDF(String fo, String outputFile) throws SAXException, IOException, TransformerException {
        FopFactory fopFactory = FopFactory.newInstance(new File(".").toURI());

        OutputStream out = new BufferedOutputStream(new FileOutputStream(new File(outputFile)));

        try {
            Fop fop = fopFactory.newFop(MimeConstants.MIME_PDF, out);
            TransformerFactory factory = TransformerFactory.newInstance();
            Transformer transformer = factory.newTransformer(); // identity transformer
            InputStream stream = new ByteArrayInputStream(fo.getBytes(StandardCharsets.UTF_8));
            Source src = new StreamSource(stream);
            Result res = new SAXResult(fop.getDefaultHandler());
            transformer.transform(src, res);
        } finally {
            out.close();
        }
    }

    public void convertToPdf(String inputFile, String outputFile) throws IOException  {
        try {
            FileInputStream fInputStream = new FileInputStream(new File(inputFile));
            HWPFDocument hwpfDocument = new HWPFDocument(fInputStream);

            WordToFoConverter wordToFoConverter = new WordToFoConverter(XMLHelper.getDocumentBuilderFactory().newDocumentBuilder().newDocument());
            wordToFoConverter.processDocument(hwpfDocument);

            StringWriter stringWriter = new StringWriter();

            Transformer transformer = TransformerFactory.newInstance().newTransformer();
            transformer.setOutputProperty(OutputKeys.INDENT, "yes");
            transformer.transform(new DOMSource(wordToFoConverter.getDocument()), new StreamResult(stringWriter));

            String fo = stringWriter.toString();
            generatePDF(fo, outputFile);
            System.out.println(fo);

        } catch (TransformerConfigurationException e) {
            e.printStackTrace();
        } catch (TransformerException e) {
            e.printStackTrace();
        } catch (ParserConfigurationException e) {
            e.printStackTrace();
        } catch (SAXException e) {
            e.printStackTrace();
        }
    }

}
