import axios from "axios"
const newConnectorjkhkjh = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/11806/storyboard/11172/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnectorfthtyjheje76 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/11806/storyboard/11172/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnectorfthtyjheje7 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/11806/storyboard/11172/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnector4546 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/11806/storyboard/11172/fhfgdhghdfdfgj/gyjryjkryujru4rthfdtyhr/dyjetjryjrtyjet/thtjtyjryuj",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnectorfghdtyh = axios.create({
  baseURL: "https://google.com/https://google.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const newConnectorhgfghf = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/11806/storyboard/11172/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const mobile255septAPI = axios.create({
  baseURL: "https://mobile-255-sept-dev-11806.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list() {
  return mobile255septAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return mobile255septAPI.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return mobile255septAPI.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return mobile255septAPI.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_hggfkhjfkhg_list() {
  return mobile255septAPI.get(`/api/v1/hggfkhjfkhg/`)
}
function api_v1_hggfkhjfkhg_create(requestBody) {
  return mobile255septAPI.post(`/api/v1/hggfkhjfkhg/`, requestBody)
}
function api_v1_hggfkhjfkhg_read() {
  return mobile255septAPI.get(`/api/v1/hggfkhjfkhg/{id}/`)
}
function api_v1_hggfkhjfkhg_update(requestBody) {
  return mobile255septAPI.put(`/api/v1/hggfkhjfkhg/{id}/`, requestBody)
}
function api_v1_hggfkhjfkhg_partial_update(requestBody) {
  return mobile255septAPI.patch(`/api/v1/hggfkhjfkhg/{id}/`, requestBody)
}
function api_v1_hggfkhjfkhg_delete() {
  return mobile255septAPI.delete(`/api/v1/hggfkhjfkhg/{id}/`)
}
function api_v1_homepage_list() {
  return mobile255septAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return mobile255septAPI.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return mobile255septAPI.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return mobile255septAPI.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return mobile255septAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return mobile255septAPI.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return mobile255septAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return mobile255septAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return mobile255septAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return mobile255septAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return mobile255septAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return mobile255septAPI.post(
    `/rest-auth/password/reset/confirm/`,
    requestBody
  )
}
function rest_auth_registration_create(requestBody) {
  return mobile255septAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return mobile255septAPI.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return mobile255septAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return mobile255septAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return mobile255septAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_hggfkhjfkhg_list,
  api_v1_hggfkhjfkhg_create,
  api_v1_hggfkhjfkhg_read,
  api_v1_hggfkhjfkhg_update,
  api_v1_hggfkhjfkhg_partial_update,
  api_v1_hggfkhjfkhg_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
