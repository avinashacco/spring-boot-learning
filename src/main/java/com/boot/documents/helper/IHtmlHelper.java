package com.boot.documents.helper;


import org.apache.poi.ss.usermodel.CellStyle;

import java.util.Formatter;

/**
 * Created by avinashvundyala on 28/07/17.
 */
public interface IHtmlHelper {
    void colorStyles(CellStyle style, Formatter out);
}
