package com.viewsphere.attendance.bussiness;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import com.viewsphere.attendance.model.HomeModel;

@Service
public class HomeService {


    private String[] week_name = {"日", "月", "火", "水", "木", "金", "土"};

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public HomeService() {
		// TODO 自動生成されたコンストラクター・スタブ
	}

	public List<HomeModel> dispMonth() {
		//今の年月を取得

		Calendar calendar = Calendar.getInstance();

		int year = calendar.get(Calendar.YEAR);
		int month = calendar.get(Calendar.MONTH) + 1;
		int day = calendar.get(Calendar.DATE);
		int lastDayOfMonth = calendar.getActualMaximum(Calendar.DATE);;
		int week = calendar.get(Calendar.DAY_OF_WEEK) - 1;

		int day_of_year = calendar.get(Calendar.DAY_OF_YEAR);

		//ResultSet rs = jdbcTemplate.queryForList("select userid,ym,day,kbn,start,end,break,uptime,overtime from attendance");

		List<HomeModel> listHomeModel = jdbcTemplate.query("select userid,ym,day,kbn,start,end,break,uptime,overtime from attendance", new RowMapper<HomeModel>() {

            public HomeModel mapRow(ResultSet result, int rowNum) throws SQLException {
            	HomeModel obean = new HomeModel();
            	obean.setYm(result.getString("ym"));
            	obean.setDay(result.getString("day"));
            	obean.setKbn(result.getString("kbn"));
            	obean.setStart(result.getTime("start"));
            	obean.setEnd(result.getTime("end"));
            	obean.setMbreak(result.getTime("break"));
            	obean.setUptime(result.getTime("uptime"));
            	obean.setOvertime(result.getTime("overtime"));

                return obean;
            }

        });

		return listHomeModel;

		//当月のデータ作成有無のチェック

		//当月データがなければ作成

		//当月データ取得

		//当月データを配列に格納
	}
}
