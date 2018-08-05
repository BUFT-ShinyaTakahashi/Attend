<%@ page language="java" contentType="text/html; charset=utf8" pageEncoding="utf8"%>

<c:out value="${message}" />
<c:out value="あいうえお" />

<form:form modelAttribute="LoginModel" action="login" method="post">
<table>
	<tbody>
		<tr>
			<td>アカウント</td>
			<td>
				<form:input path="userid"/>
				<form:errors path="userid"/>
			</td>
		</tr>
		<tr>
			<td>パスワード</td>
			<td>
				<form:input path="password"/>
				<form:errors path="password"/>
			</td>
		</tr>
		<tr>
			<td></td>
			<td><input type="submit" value="ログイン"></td>
		</tr>
	</tbody>
</table>
</form:form>