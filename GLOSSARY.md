# Local Movie Library

This context describes films and the local media files Loomi indexes for them.

## Language

**Movie**:
A film as a work or title, distinct from any local copy. A Movie has a stable Loomi identity independent of metadata providers, is created only when its film identity is known, and may be associated with multiple MovieFiles.

**MovieFile**:
One location-specific local media-file entry indexed by Loomi. A MovieFile may be linked to at most one Movie or remain unmatched; a changed path is a new entry unless explicitly relocated.

**Availability**:
Whether Loomi can currently confirm that a MovieFile is available, missing after its parent location was checked, or unknown because its status could not be determined. Last observed file facts remain useful even when current availability is not confirmed.
