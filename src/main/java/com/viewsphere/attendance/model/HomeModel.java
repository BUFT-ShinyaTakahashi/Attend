package com.viewsphere.attendance.model;

import java.io.Serializable;
import java.sql.Time;
import java.text.SimpleDateFormat;

public class HomeModel  implements Serializable{
	private static final long serialVersionUID = 1L;

	private String userid;
	private String ym;
	private String day;
	private String kbn;
	private Time   start;
	private Time   end;
	private Time   mbreak;
	private Time   uptime;
	private Time   overtime;

	SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");

	public HomeModel(){
		userid = "";
		ym = "";
		day = "";
		kbn = "";
		start = null;
		end = null;
		mbreak = null;
		uptime = null;
		overtime = null;
	}

	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getYm() {
		return sdf.format(ym);
	}
	public void setYm(String ym) {
		this.ym = ym;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	public String getKbn() {
		return kbn;
	}
	public void setKbn(String kbn) {
		this.kbn = kbn;
	}
	public String getStart() {
		return sdf.format(start);
	}
	public void setStart(Time start) {
		this.start = start;
	}
	public String getEnd() {
		return sdf.format(end);
	}
	public void setEnd(Time end) {
		this.end = end;
	}
	public String getMbreak() {
		return sdf.format(mbreak);
	}
	public void setMbreak(Time mbreak) {
		this.mbreak = mbreak;
	}
	public String getUptime() {
		return sdf.format(uptime);
	}
	public void setUptime(Time uptime) {
		this.uptime = uptime;
	}
	public String getOvertime() {
		return sdf.format(overtime);
	}
	public void setOvertime(Time overtime) {
		this.overtime = overtime;
	}


}
