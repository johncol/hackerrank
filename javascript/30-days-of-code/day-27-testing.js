class TestDataEmptyArray {
  get_array() {
    return [];
  }
}

class TestDataUniqueValues {
  get_array() {
    return [7, 4, 6, 11, 5, 1, 66];
  }

  get_expected_result() {
    return 5;
  }
}

class TestDataExactlyTwoDifferentMinimums {
  get_array() {
    return [7, 4, 6, 11, 5, 1, 66, 1];
  }

  get_expected_result() {
    return 5;
  }
}
