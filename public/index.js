const url = "https://growdev-first-app.herokuapp.com/user";

function buscarUsuarios() {
	axios.get(url).then((response) => {
        document.querySelector("tbody").innerHTML = '';

		response.data.forEach((user) => {
			document.querySelector("tbody").innerHTML += `
                <tr>
                <th scope="row">${user.id}</th>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.cpf}</td>
                <td>${user.email}</td>
                </tr>
                `;
		});
	});
}

function buscarId() {
	const inputId = document.querySelector("#inputId");
	if (inputId.value) {
		axios.get(url + `/${inputId.value}`).then((response) => {
			let user = response.data;
			document.querySelector("tbody").innerHTML = `
        <tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.age}</td>
        <td>${user.cpf}</td>
        <td>${user.email}</td>
        </tr>
        `;
		}).catch( (error) => {
            if(error.response){
                alert(error.response.data);
            } else {
                console.log(error);
            }
        });
	} else {
        buscarUsuarios();
	}
}

document.addEventListener('DOMContentLoaded', () => {
    buscarUsuarios();
})

