function formatAuthors(authors, style) {
  if (!authors.length) return '';

  if (style === 'APA') {
    return authors.map(a => `${a.lastName}, ${a.firstName[0]}.`).join(', ');
  }

  if (style === 'MLA') {
    if (authors.length === 1) {
      return `${authors[0].lastName}, ${authors[0].firstName}`;
    } else if (authors.length === 2) {
      return `${authors[0].lastName}, ${authors[0].firstName}, and ${authors[1].firstName} ${authors[1].lastName}`;
    } else {
      return `${authors[0].lastName}, ${authors[0].firstName}, et al.`;
    }
  }

  if (style === 'Chicago') {
    if (authors.length === 1) {
      return `${authors[0].lastName}, ${authors[0].firstName}`;
    } else {
      return authors.map(a => `${a.firstName} ${a.lastName}`).join(', ');
    }
  }

  if (style === 'Vancouver') {
    return authors.map(a => `${a.lastName} ${a.firstName[0]}`).join(', ');
  }

  return '';
}

function generateCitation(data, style) {
  const {
    authors, title, journal, year,
    volume, issue, pages, doi
  } = data;

  const formattedAuthors = formatAuthors(authors, style);

  switch (style) {
    case 'APA':
      return `${formattedAuthors} (${year}). ${title}. *${journal}*, ${volume}${issue ? `(${issue})` : ''}, ${pages}.${doi ? ` https://doi.org/${doi}` : ''}`;
    case 'MLA':
      return `${formattedAuthors}. "${title}." *${journal}* ${volume}${issue ? `.${issue}` : ''} (${year}): ${pages}.${doi ? ` https://doi.org/${doi}` : ''}`;
    case 'Chicago':
      return `${formattedAuthors}. "${title}." *${journal}* ${volume}${issue ? `, no. ${issue}` : ''} (${year}): ${pages}.${doi ? ` https://doi.org/${doi}` : ''}`;
    case 'Vancouver':
      return `${formattedAuthors}. ${title}. ${journal}. ${year};${volume}${issue ? `(${issue})` : ''}:${pages}.${doi ? ` doi:${doi}` : ''}`;
    default:
      return 'Unsupported citation style.';
  }
}
