package com.boot.controller;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.core.io.Resource;


import org.springframework.http.converter.protobuf.ProtobufHttpMessageConverter;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
//import com.boot.proto.

/**
 * Created by avinashvundyala on 16/06/17.
 */
@RestController
public class HomeController {

    @Autowired
    ResourceLoader loader;

    @RequestMapping("/")
    public String home() {
        return "Das Boot, reporting for duty";
    }


    @RequestMapping("/pdf")
    public byte[] getPdf(HttpServletResponse response) throws IOException {
        Resource resource = loader.getResource("classpath:sample.pdf");
        response.setContentType("application/octet-stream");
        return IOUtils.toByteArray(resource.getInputStream());
    }
}
