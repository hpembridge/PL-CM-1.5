# PL-CM — Customer Management

Platinum epic: Customer Management prototype.

## Setup

Clone with submodules to get design tokens:

```bash
git clone --recurse-submodules https://github.com/hpembridge/Customer-Management-Handoff
```

If already cloned: `git submodule update --init`

## Pulling updated design tokens

When `platinum-shared` has been updated:

```bash
git submodule update --remote shared
git add shared
git commit -m "Update shared design tokens"
```

See [platinum-shared](https://github.com/hpembridge/platinum-shared) for full maintenance docs.

## Planned features

- general contact
- MM logins
- feedback flyout
- contact import / export

