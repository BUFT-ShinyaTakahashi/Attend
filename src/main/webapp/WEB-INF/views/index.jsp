<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page contentType="text/html;charset=UTF-8"%>
<%@ page session="false" %>


<link rel="stylesheet" type="text/css" href="<c:url value="resources/style/top.css" />">


<div class="btn-box">

<form:form>
<button type="submit" name="person">
	<img src="<c:url value="resources/images/bt_humanname.png" />">
</button>
<button type="submit" name="group">
	<img src="<c:url value="resources/images/bt_groupname.png" />">
</button>
</form:form>



</div>


<hr>


<div class='box'>
    <span class='box-title'>お知らせ</span>
    <p>
    ◆ <a href=''>[ メンテナンスのお知らせ ] 2017/12/1～2017/12/3の期間、サイトメンテナンスとなります。</a><br>
    ◆ <a href=''>[ 新規登録情報 ] カプ式会社ハイパーモチベーションが新規登録されました。</a>
    </p>
</div>

<div class='box'>
    <span class='box-title'>更新情報</span>
    <p>
    ◆ <a href=''>[ AKB48 ] 大島優子のページが更新されました。</a><br>
    ◆ <a href=''>[ AKB48 ] 前田敦子のページが更新されました。</a><br>
    ◆ <a href=''>[ カプ式会社ハイパーモチベーション ] 小澤綾乃のページが更新されました。</a><br>
    </p>
</div>

<hr>
<h1>
	イベント情報①
</h1>
<br><br><br><br><br><br><br>


<hr>
<h1>
	イベント情報②
</h1>
<br><br><br><br><br><br><br>



<table>
	<thead>
		<tr>
			<th scope="col">check</th>
			<th scope="col">日時</th>
			<th scope="col">区分</th>
			<th scope="col">始業時刻</th>
			<th scope="col">終業時刻</th>
			<th scope="col">休憩時間</th>
			<th scope="col">勤務時間</th>
			<th scope="col">時間外</th>
			<th scope="col">備考</th>
		</tr>
	</thead>
	<tbody>


<c:forEach var="month" items="${months}">
		<tr>
			<td>■</td>
			<td><c:out value='${month.day}' /> 日</td>
			<td>
				<select cless='kinmukbn'>
					<option value="en">平日</option>
					<option value="de">休日</option>
					<option value="fr">有休</option>
					<option value="ja">欠勤</option>
					<option value="zh">法定休日</option>
				</select>
			</td>
			<td><input type='text' class='hhmm' value='${month.start}'></td>
			<td><input type='text' class='hhmm' value='${month.end}'></td>
			<td><input type='text' class='hhmm' value='${month.mbreak}'></td>
			<td>${month.uptime}</td>
			<td>${month.overtime}</td>
			<td>特になし</td>
		</tr>
</c:forEach>

	</tbody>

	<tfoot>
		<tr>
			<td>フッター</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</tfoot>
</table>


