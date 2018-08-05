<%@ page language="java" contentType="text/html; charset=utf8" pageEncoding="utf8"%>

<script type="text/javascript" src="resources/js/attendance.js"></script>
<link rel="stylesheet" type="text/css" href="<c:url value="resources/style/attendance.css" />">

<form:form action="">

		<div class = "attendance">
			<div class = "select">
				<a href="#" class="prev" style="text-decoration: none;">←前月</a>
				<a href="#" class="next" style="text-decoration: none;">翌月→</a>
				<a href="#" class="init" style="text-decoration: none;">init</a>
				<input value="+" type="button" class="addList">
				<input value="-" type="button" class="delList">
				※+-ボタンは動作確認用(実際にははずす)
				<p>
					<input class='nowYM' disabled value=""></input>
					総勤務時間　<input class='total' disabled value=""></input>
					総深夜勤務時間　<input class='totalMd' disabled value=""></input>
				</p>

			</div>
			<!-- <div style="height: 400px;overflow-y:scroll"> -->
			<table class = "table">
				<thead>
					<tr>
						<th style="width:30px;">日付</th>
						<th style="width:30px;">曜日</th>
						<th style="width:120px;">勤務区分</th>
						<th style="width:80px;">休出振替日</th>
						<th colspan="2" style="width:100px;">始業時刻</th>
						<th colspan="2" style="width:100px;">終業時刻</th>
						<th style="width:70px;">休憩時間</th>
						<th style="width:70px;">休憩時間<br>(22時以降)</th>
						<th style="width:70px;">勤務時間</th>
						<th style="width:70px;">勤務時間<br>(深夜)</th>
						<th style="width:250px;">備考</th>
					</tr>
				</thead>
				<tbody id="line">
					<tr>
						<td class = "date"></td>
						<td class = "wd"></td>
						<td class = "wkStyle">
							<select class = "sel" size = "1" style="width:120px;">
								<option value="none" disabled selected></option>
								<option value="1">通常勤務</option>
								<option value="2">休日</option>
								<option value="3">休日出勤</option>
								<option value="4">日曜出勤(振休あり)</option>
								<option value="5">日曜出勤(振休なし)</option>
								<option value="6">全休(有給休暇)</option>
								<option value="7">半休(有給休暇)</option>
								<option value="8">全休(特別休暇)</option>
								<option value="9">半休(特別休暇)</option>
								<option value="10">全休(稼動調整)</option>
								<option value="11">半休(稼動調整)</option>
								<option value="12">全休(欠勤)</option>
								<option value="13">半休(欠勤)</option>
							</select>
						</td>
						<td><input class = "holiday" tabindex="4"></td>
						<td class = "staHH" tabindex="2">
							<select class = "sel2" size = "1" style="width:46px;">
								<option value="none" disabled selected></option>
								<option value="0">00</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
								<option value="32">32</option>
								<option value="33">33</option>
						</td>
						<td class = "staMM" tabindex="3">
							<select class = "sel3" size = "1" style="width:47px;">
								<option value="none" disabled selected></option>
								<option value="00">00</option>
								<option value="30">30</option>
						</td>
						<td class = "endHH" tabindex="2">
							<select class = "sel4" size = "1" style="width:46px;">
								<option value="none" disabled selected></option>
								<option value="0">00</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
								<option value="24">24</option>
								<option value="25">25</option>
								<option value="26">26</option>
								<option value="27">27</option>
								<option value="28">28</option>
								<option value="29">29</option>
								<option value="30">30</option>
								<option value="31">31</option>
								<option value="32">32</option>
								<option value="33">33</option>
						</td>
						<td class = "endMM" tabindex="3">
							<select class = "sel5" size = "1" style="width:47px;">
								<option value="none" disabled selected></option>
								<option value="00">00</option>
								<option value="30">30</option>
						</td>
						<td><input class = "break" tabindex="4"></td>
						<td><input class = "breakMd" tabindex="5"></td>
						<td><input class = "wkTime" tabindex="6" disabled></td>
						<td><input class = "wkTimeMd" tabindex="7" disabled></td>
						<td><input class = "free" tabindex="9"></td>
					</tr>
				</tbody>
				<tfoot>
				</tfoot>

			</table>

</form:form>


<hr>
