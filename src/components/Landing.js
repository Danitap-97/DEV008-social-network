export const Landing = (onNavigate) => {
  const landingDiv = document.createElement('div');
  landingDiv.appendChild(onNavigate);
  return landingDiv;
};
