
function applyLoginJavaScript() {
	console.log('login');
function loginyjp(id, password) {
	console.log("로그인yjp");
fetch('', {
  method: 'POST',
  headers: {
    'Content-Type': ''
  },
  body: 'uid='+ id +'&upwd='+ password +'%21&return_url='
})
.then(response => {
  console.log(response);
})
.catch(error => {
  console.error(error);
});
}


const idInput = document.querySelector('.id');
const passInput = document.querySelector('.pass');
const loginBtn = document.querySelector('.Blogin');

loginBtn.addEventListener('click', function() {
  const id = idInput.value;
  const password = passInput.value;
  loginyjp(id, password);
  idInput.value = '';
  passInput.value = '';
});

}