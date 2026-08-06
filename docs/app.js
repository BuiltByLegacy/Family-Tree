const search = document.querySelector('#search');
const cards = [...document.querySelectorAll('.person')];
const details = [...document.querySelectorAll('details')];

search.addEventListener('input', () => {
  const term = search.value.trim().toLowerCase();
  cards.forEach(card => {
    const match = card.textContent.toLowerCase().includes(term);
    card.classList.toggle('hidden', term && !match);
  });

  details.forEach(section => {
    const visible = [...section.querySelectorAll('.person')].some(card => !card.classList.contains('hidden'));
    const branchMatch = (section.dataset.branch || '').toLowerCase().includes(term);
    section.classList.toggle('hidden', Boolean(term) && !visible && !branchMatch);
    if (term && (visible || branchMatch)) section.open = true;
  });
});

document.querySelector('#expandAll').addEventListener('click', event => {
  const shouldOpen = details.some(section => !section.open);
  details.forEach(section => section.open = shouldOpen);
  event.currentTarget.textContent = shouldOpen ? 'Collapse all branches' : 'Expand all branches';
});