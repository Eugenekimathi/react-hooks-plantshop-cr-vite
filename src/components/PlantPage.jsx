import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addPlant, searchQuery, setSearchQuery }) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search
      searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} 
      />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
