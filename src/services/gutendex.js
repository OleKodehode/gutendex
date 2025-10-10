const BASEURL = "https://gutendex.com/books";

const get = async (url) => {
  console.log(`Get was called with the URL: ${url}`);
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`Response Status: ${response.status}`);

    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const getBooks = (query = null, params = null) => {
  const url = `${BASEURL}${query ? `?${query}` : ""}${
    query && params ? `=${params}` : ""
  }`;

  console.log(url);

  return get(url);
};

export const getSpecificBooks = (params = null) => {
  if (!params) return;

  const url = `${BASEURL}?ids=${params.join(",")}`;

  console.log(url);

  return get(url);
};

export const getSearchBooks = (searchQuery = null) => {
  if (!searchQuery) return;
  searchQuery = searchQuery.replace(" ", "%20");
  const url = `${BASEURL}?search=${searchQuery}`;

  console.log(url);

  return get(url);
};

export const getNextBooks = (url) => {
  return get(url);
};

export const getPrevBooks = (url) => {
  return get(url);
};
