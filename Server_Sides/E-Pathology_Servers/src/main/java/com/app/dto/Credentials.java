package com.app.dto;

import javax.validation.constraints.NotBlank;

public class Credentials {
    @NotBlank
    @javax.validation.constraints.Email(message="Not in Valid Format")
    private String email;
    @NotBlank
    private String password;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "Credentials [email=" + email + ", password=" + password + "]";
	}

}
