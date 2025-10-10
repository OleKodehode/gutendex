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

export const getBooks = (topic = null) => {
  const url = topic ? `${BASEURL}?topic=${topic}` : BASEURL;

  return get(url);
};

export const getSpecificBooks = (ids = []) => {
  if (!ids.length) return { results: [], count: 0, next: null, previous: null };

  const url = `${BASEURL}?ids=${ids.join(",")}`;

  return get(url);
};

export const getSearchBooks = (query = "") => {
  if (!query.trim())
    return { results: [], count: 0, next: null, previous: null };
  const encodedQuery = encodeURIComponent(query);

  const url = `${BASEURL}?search=${encodedQuery}`;

  return get(url);
};

export const getNextBooks = (url) => get(url);

export const getPrevBooks = (url) => get(url);
