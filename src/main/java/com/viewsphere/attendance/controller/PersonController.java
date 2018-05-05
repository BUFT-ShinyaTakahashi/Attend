package com.viewsphere.attendance.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/person")
public class PersonController {

	private static final Logger logger = LoggerFactory.getLogger(PersonController.class);

	/**
	* 個人一覧へ遷移
	* @author Shinya Takahashi
	* @param model
	* @return personList
	* @throws Exception
	*/
	@RequestMapping(params = "personList", method = RequestMethod.POST)
    public String Person(Model model) {
        return "personList";
    }

	/**
	* 個人詳細へ遷移
	* @author Shinya Takahashi
	* @param model
	* @return personList
	* @throws Exception
	*/
	@RequestMapping(params = "personDetail", method = RequestMethod.POST)
    public String PersonDetail(Model model) {
        return "personDetail";
    }

}
