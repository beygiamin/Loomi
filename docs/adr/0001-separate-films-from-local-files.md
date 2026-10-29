# Separate Film Identity from Local Files

**Status:** Accepted

Issue #2 requires path-unique local file records and per-file availability, while future metadata belongs to the film itself. Model `Movie` as a provider-neutral film identity and `MovieFile` as one location-specific file: a Movie may have many MovieFiles, a file may be unmatched or link to at most one Movie, and scanning creates MovieFiles without placeholder Movies. This keeps file facts and availability separate from title metadata, supports multiple copies of a film, and avoids using filenames or provider IDs as Loomi's identity.

## Consequences

- `Movie` has a stable internal identity, one canonical title, an optional release year, and zero or more provider-namespaced external IDs.
- `MovieFile` has a stable internal identity and a unique normalized path; changed paths are new entries unless explicitly relocated.
- Rich metadata and provider/user overwrite behavior remain deferred until a metadata feature is designed.
