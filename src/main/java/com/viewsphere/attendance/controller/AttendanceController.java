package com.viewsphere.attendance.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/attendance")
public class AttendanceController {

	private static final Logger logger = LoggerFactory.getLogger(AttendanceController.class);

	/**
	* 初期表示
	* @author Shinya Takahashi
	* @param model
	* @return personList
	* @throws Exception
	*/
	@RequestMapping(params = "attendance", method = RequestMethod.POST)
    public String Person(Model model) {
        return "attendance";
    }


}
