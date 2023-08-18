import './filterCategory.css';

export function FilterCategoryYear() {
	return (
		<div className="filter__category">
          <div className="filter__wrapper">
            <ul className="filter__list">
              <li className="filter__item">1992</li>
              <li className="filter__item">1993</li>
              <li className="filter__item">2000</li>
              <li className="filter__item">2023</li>
            </ul>
          </div>
        </div>
	)
}