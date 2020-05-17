import styles from './grid.module.css';

export default function getClass(className) {
  return (styles && styles[className]) ? styles[className] : className;
}
