import React, { useState } from 'react';
import styles from '../css/AllCategories.module.css';
import Disaster from './Disaster';
import Emergency from './Emergency';
import Nation from './Nation';
import Report from '../../components/Report';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AllCategories = () => {
  let showReport = useSelector(state => state.show.reportshow);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const nav = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={styles.all}>

      <div className={styles['all-categories']}>
        <div className={styles['category-menu']}>
          <div className={styles['category-list']}>
            <button
              className={selectedCategory === 'all' ? styles.selected : ''}
              onClick={() => handleCategoryClick('all')}
            >
              전체
            </button>
            <button
              className={selectedCategory === 'disaster' ? styles.selected : ''}
              onClick={() => handleCategoryClick('disaster')}
            >
              자연재난
            </button>
            <button
              className={selectedCategory === 'nation' ? styles.selected : ''}
              onClick={() => handleCategoryClick('nation')}
            >
              국가재난
            </button>
            <button
              className={selectedCategory === 'emergency' ? styles.selected : ''}
              onClick={() => handleCategoryClick('emergency')}
            >
              응급처치
            </button>
          </div>
        </div>
        <div className={styles['category-content']}>
          {selectedCategory === 'all' && (
            <div>
              <Disaster />
              <Nation />
              <Emergency />
            </div>
          )}
          {selectedCategory === 'disaster' && <Disaster />}
          {selectedCategory === 'nation' && <Nation />}
          {selectedCategory === 'emergency' && <Emergency />}
          {showReport ? <Report /> : undefined}
        </div>
      </div>


    </div>
  );
};

export default AllCategories;