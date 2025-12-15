function e(t, a){
    return a ? document.querySelectorAll(t) : document.querySelector(t);
}

const depts = ["Admin", "Office", "Counselor", "CTE", "History", "Math", "Gym", "Dean", "Language", "Science", "English", "Support", "Student Success Center", "Para", "Interns", "GudianceCounselor" ];


function d(t, ctxt) {
	e(t).insertAdjacentHTML("beforeend", `<div class="row">${ctxt}</div>`);
}

var getDeptName = index => depts[index];

var createTbHeader = (arrayName, count) => `<thead><tr><th colspan="3">${getDeptName(arrayName)} (${count.length})</th></tr></thead>`;

var createTbBody = context => `<tbody>${context}</tbody>`;

var createTbBodyRow = context => `<tr>${context}</tr>`;

var createTbBodyContent = context => `<td>${context}</td>`;


var createTableCotents = () => {
	var html = "";

	for (var staff in STAFF) {
		var mainIndex = STAFF[staff].sort();

		html += createTbHeader(staff, mainIndex);

		var data = "";

		for (var subIndex in mainIndex) {
			data += (subIndex == 0) ?
				`<td></td>${createTbBodyContent(mainIndex[subIndex])}` :
				`${createTbBodyContent(mainIndex[subIndex])}`;
		}
		html += createTbBody(createTbBodyRow(data));
	}
	return html;
}


