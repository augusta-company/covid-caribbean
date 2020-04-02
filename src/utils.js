/**
 * this function gets the proper data for the selected country in each of the questions and warnings
 * @param {array} data results of querying all files of a certain type
 * @param {string} country slug of the country we want the data of
 */
export function getHtmlforCountry(data, country) {
  return data.find(element => element.node.frontmatter.country === country)
}

/**
 * Gets the cases data for the country passed as slug
 * @param {string} slug the slug of the country we want the data of
 */
export async function getCasesData(slug) {
  // API info https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest
  let confirmed = await fetch(
    `https://api.covid19api.com/country/${slug}/status/confirmed`
  )
  let confirmedArr = await confirmed.json()
  let recovered = await fetch(
    `https://api.covid19api.com/country/${slug}/status/recovered`
  )
  let recoveredArr = await recovered.json()
  let deaths = await fetch(
    `https://api.covid19api.com/country/${slug}/status/deaths`
  )
  let deathsArr = await deaths.json()

  return {
    confirmed: confirmedArr[confirmedArr.length - 1].Cases,
    recovered: recoveredArr[recoveredArr.length - 1].Cases,
    deaths: deathsArr[deathsArr.length - 1].Cases,
    slug,
  }
}
