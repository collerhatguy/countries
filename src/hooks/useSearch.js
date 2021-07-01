import { useEffect} from "react";
export default function useSearch({searchQuery, initialData, setData, searchTarget}) {

    useEffect(() => {
        setData(initialData.filter(country => {
          if (searchQuery === "") return true;
          return country[searchTarget].includes(searchQuery);
        }))
      }, [searchQuery]);
}