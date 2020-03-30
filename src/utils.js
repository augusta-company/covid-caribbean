export function getHtmlforCountry(data, country) {
  return data.find(element => element.node.frontmatter.country === country)
}
