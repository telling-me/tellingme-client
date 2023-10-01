// email data
export const SPACE = '%0D%0A'
export const INQUIRYT_DATA = {
  email: 'tellingmetime.gmail.com',
  subject: '[텔링미 고객센터] 전달사항이 있어요!',
  body: `안녕하세요, 텔링미입니다.${SPACE}어떤 내용을 텔링미에게 전달하고 싶으신가요? 자유롭게 작성해주시면 확인 후 답변 드리겠습니다. 감사합니다. 😀${SPACE} 📱 쓰고 있는 기종 (예: 갤럭시 S8, 웹): ${SPACE}${SPACE} 🧗🏻‍♀️ 닉네임: ${SPACE}${SPACE} ⚠️ 오류를 발견하셨을 경우 ⚠️${SPACE} 발견한 오류 : ${SPACE}${SPACE} 📷 오류 화면 (캡쳐 혹은 화면녹화): `
}
export const EMAIL_DATA = `mailto:${INQUIRYT_DATA.email}?subject=${INQUIRYT_DATA.subject}&body=${INQUIRYT_DATA.body}`
