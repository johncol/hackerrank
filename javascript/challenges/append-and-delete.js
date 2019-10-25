const mapYesNo = flag => (flag ? 'Yes' : 'No');

function appendAndDelete(initial = '', desired = '', maxOperations = 0) {
  let i = 0;
  while (i < initial.length && i < desired.length && initial[i] === desired[i]) {
    i++;
  }

  const removeOperations = initial.length - i;
  const addOperations = desired.length - i;
  const requiredOperations = removeOperations + addOperations;

  const enoughOperationsAvailable = requiredOperations <= maxOperations;
  if (!enoughOperationsAvailable) {
    return mapYesNo(false);
  }

  const initialShouldBeCompletelyRemoved = removeOperations === initial.length;
  if (initialShouldBeCompletelyRemoved) {
    return mapYesNo(true);
  }

  const reminderOperations = maxOperations - requiredOperations;
  const evenRemiderOperations = reminderOperations % 2 === 0;
  if (addOperations === 0 && reminderOperations > desired.length * 2) {
    return mapYesNo(true);
  }

  return mapYesNo(evenRemiderOperations);
}
