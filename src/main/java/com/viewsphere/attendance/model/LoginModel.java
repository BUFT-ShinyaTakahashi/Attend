package com.viewsphere.attendance.model;

import java.io.Serializable;

public class LoginModel  implements Serializable{
	private static final long serialVersionUID = 1L;

	private String userid;
	private String password;

	public LoginModel(){
		userid = "";
		password = "";
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}




}
