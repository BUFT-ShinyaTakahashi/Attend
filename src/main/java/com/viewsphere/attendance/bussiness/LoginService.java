package com.viewsphere.attendance.bussiness;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.viewsphere.attendance.model.LoginModel;

@Service
public class LoginService {


    private String[] week_name = {"日", "月", "火", "水", "木", "金", "土"};

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public LoginService() {
		// TODO 自動生成されたコンストラクター・スタブ
	}

	public boolean chkUserPassWord(LoginModel loginModel) {

		boolean checkResult;

		List<Map<String, Object>> list = jdbcTemplate.queryForList("select employeeNo,name from employee_mst where employeeNo = '" + loginModel.getUserid() + "'");

		if(list.isEmpty()) {
			checkResult = false;
		}else {
			if(list.get(0).get("name").equals(loginModel.getPassword())) {
				checkResult = true;
			}else {
				checkResult = false;
			}
		}

		return checkResult;

	}
}
