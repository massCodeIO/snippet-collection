export const getCodeByLang = (lang = 'html', string) => {
  const htmlRe = /```html\n([\S\s]+?)\n```/
  const cssRe = /```css\n([\S\s]+?)\n```/

  return string.match(lang === 'html' ? htmlRe : cssRe)[1]
}

export const formatSnippetData = (data) => {
  console.log(data)
  return {
    id: data.slug,
    title: data.title,
    css: getCodeByLang('css', data.text),
    html: getCodeByLang('html', data.text),
    author: data.author,
    date: data.createdAt,
    category: data.path.split('/')[1],
    isGray: data?.isGray || false,
    isDark: data?.isDark || false
  }
}

export const capFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
