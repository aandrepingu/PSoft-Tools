export async function post_Tripple(url: string, body: string, precondition: string, postcondition: string) {
  const obj = {preCon: JSON.stringify(precondition), code: JSON.stringify(body), postCon: JSON.stringify(postcondition)};
  //console.log("api0");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),

  });
  //console.log("api1");
  const data = await response.json();
  //console.log(data);
  return data;
}

export async function post(url: string, body: string) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return data;
}
//add more requests as we go
export async function get(url: string) {
  const response = await fetch(url, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}
