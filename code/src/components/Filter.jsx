function Filter({ currentFilter, onFilterChange, todoStats }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div className="filter-container">
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`btn-filter ${currentFilter === filter ? 'active' : ''}`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
      <div className="todo-stats">
        <span>Total: {todoStats.total}</span>
        <span>Active: {todoStats.active}</span>
        <span>Completed: {todoStats.completed}</span>
      </div>
    </div>
  );
}

export default Filter;
