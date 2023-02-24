// this is a custom hook that combines our dogs query
// with useMemo to provide modified data to multiple components
export const useModifiedDogs = () => {
  const { data, isLoading } = useGetDogsQuery();
  const myDogs = useMemo(() => {
    const dogs = {};
    for (const id in data) {
      const dog = data[id];
      dogs[id] = {
        ...dog,
        size: getSize(dog.weight),
        age: getAge(dog.dob),
      };
    }
    return dogs;
  }, [data]);
  return { data: myDogs, isLoading };
};
