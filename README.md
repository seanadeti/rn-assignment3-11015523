# rn-assignment3-11015523

## 11015523

## Screenshots
![Simulator Screenshot - iPhone 14 Pro Max - 2024-06-02 at 14 56 44](https://github.com/seanadeti/rn-assignment3-11015523/assets/143741295/d9db9950-6468-46d8-8353-06d0ded46c0a)
![Simulator Screenshot - iPhone 14 Pro Max - 2024-06-02 at 14 56 50](https://github.com/seanadeti/rn-assignment3-11015523/assets/143741295/740a6097-e8e5-469a-abac-eda1c9674fcb)
![Simulator Screenshot - iPhone 14 Pro Max - 2024-06-02 at 14 56 54](https://github.com/seanadeti/rn-assignment3-11015523/assets/143741295/e95251dd-0cf4-4240-90e6-1d385d7f18b6)
![Simulator Screenshot - iPhone 14 Pro Max - 2024-06-02 at 14 56 56](https://github.com/seanadeti/rn-assignment3-11015523/assets/143741295/de4f987f-3539-47da-977a-84324fd3795c)
![Simulator Screenshot - iPhone 14 Pro Max - 2024-06-02 at 14 57 13](https://github.com/seanadeti/rn-assignment3-11015523/assets/143741295/32d832a3-01c7-44fe-80d1-c0cf98ee03c2)
![Simulator Screenshot - iPhone 14 Pro Max - 2024-06-02 at 14 57 23](https://github.com/seanadeti/rn-assignment3-11015523/assets/143741295/4b7a4580-fa69-4e92-a69c-7f44b5d49237)


## Components Overview

This React Native application utilizes several key components to create a dynamic and user-friendly interface. Below is a brief description of each component used in the app:

### Core Components

- **`View`**:
  - The primary building block of the UI, used to create containers and apply styles.
  - Example: `<View style={styles.container}>...</View>`

- **`ScrollView`**:
  - A scrolling container that can hold multiple components and scroll them vertically or horizontally.
  - Useful for displaying content that exceeds the screen size.
  - Example: `<ScrollView showsVerticalScrollIndicator={false}>...</ScrollView>`

- **`SafeAreaView`**:
  - Ensures content is rendered within the safe area boundaries of a device, avoiding notches and status bars.
  - Example: `<SafeAreaView style={styles.container}>...</SafeAreaView>`

- **`Text`**:
  - Displays text within the app, which can be styled and nested.
  - Example: `<Text style={styles.head}>Hello, Devs</Text>`

- **`Image`**:
  - Displays images, with the `source` prop specifying the image location (local file or URL).
  - Example: `<Image source={require('./images/ProfileImage.png')} style={styles.profilePic} />`

- **`TextInput`**:
  - Allows user input of text, customizable with various props like `placeholder` and `value`.
  - Example: `<TextInput placeholder='Search' style={styles.searchBox} />`

- **`FlatList`**:
  - Efficiently renders a large list of items, using `data` and `renderItem` props.
  - Example: `<FlatList data={data} renderItem={renderItem} />`

### Specific Components in the App

- **Container (`styles.container`)**:
  - The main container that holds the entire app layout, using flexbox for alignment and layout.
  - Example: `<View style={styles.container}>...</View>`

- **Heading (`styles.heading`)**:
  - Contains the greeting message and user profile picture.
  - Example: `<View style={styles.heading}>...</View>`

- **Search Section (`styles.search`)**:
  - Includes a search box with placeholder text and search/filter icons.
  - Example: `<View style={styles.search}>...</View>`

- **Categories (`styles.cat`)**:
  - Displays category titles and horizontal scrollable sections.
  - Example: `<ScrollView horizontal={true}>...</ScrollView>`

- **Task Section (`styles.task`)**:
  - Displays ongoing tasks in a scrollable list, using `FlatList` for efficient rendering.
  - Example: `<View style={styles.task}>...</View>`

### Key Styles

- **`styles.container`**:
  - Main layout container with background color and padding.
  
- **`styles.head`**:
  - Large, bold text style for the greeting.

- **`styles.heading`**:
  - Positions the heading and profile picture.

- **`styles.profilePic`**:
  - Styles for the profile picture with specific dimensions and rounded corners.

- **`styles.searchBox`**:
  - Styles for the search input box, including border radius and background color.

- **`styles.searchIcon`** and **`styles.filterIcon`**:
  - Position and size the search and filter icons respectively.

- **`styles.cat`**:
  - Styling for category titles.

- **`styles.scrollView`** and **`styles.scrollContent`**:
  - Styles for the scrollable view and its content.

- **`styles.task`**:
  - Container for the task section with padding and margin.

- **`styles.list`** and **`styles.contentContainer`**:
  - Styles for the task list and its content container.

- **`styles.item`**:
  - Styles for individual task items including background color and padding.




