const { data: myDogs, isLoading, refetch } = useGetDogsQuery();

// ...

addDog(data)
  .unwrap()
  .then(() => {
    refecth();
  })
  .catch((response) => {
    const message = `Adding dog failed: ${JSON.stringify(response)}`;
    alert(message);
  });
