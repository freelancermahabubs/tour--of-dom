console.log('third file');
const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My Dynamic Section</h1>
<p>Extra text added inside paragraph</p>
<ul>
<li>first itmes</li>
<li>first itmes</li>
<li>first itmes</li>
</ul>
`
main.appendChild(section);
