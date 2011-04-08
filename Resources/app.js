
var windows = {
  "win1": Titanium.UI.createWindow({
    url: "windows/win1.js",
    title: "Window 1"
  }),
  "win2": Titanium.UI.createWindow({
    url: "windows/win2.js",
    title: "Window 2"
  })
};

var tabGroup = Titanium.UI.createTabGroup();
var tabs = {
  "tab1": Titanium.UI.createTab({
      icon:'KS_nav_views.png',
      title:'Tab 1',
      backgroundColor:'#fff',
      window:windows.win1
  }),
  "tab2": Titanium.UI.createTab({
      icon:'KS_nav_ui.png',
      title:'Tab 2',
      backgroundColor:'#fff',
      window:windows.win2
  })
};

tabGroup.addTab(tabs.tab1);
tabGroup.addTab(tabs.tab2);
tabGroup.open();



