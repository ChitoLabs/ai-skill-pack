# React Hook Form

**Version 1.2.0**  
Community  
May 2026

> **Note:** This document targets React Hook Form codebases.
> It is mainly for agents and LLMs to follow when maintaining, generating, or refactoring forms.
> Humans may also find it useful, but guidance here is optimized for automation and consistency
> by AI-assisted workflows.

---

## Abstract

Comprehensive performance optimization guide for React Hook Form applications, designed for AI agents and LLMs. Contains 45 rules across 8 categories, prioritized by impact from critical (form configuration, field subscriptions, async submit lifecycle) to incremental (advanced patterns). Covers the v7.55+ `subscribe()` API, server error handling via `setError('root.*')`, and the `disabled` register option. Each rule includes detailed explanations, real-world examples comparing incorrect vs. correct implementations, and specific impact metrics to guide automated refactoring and code generation.

---

## Table of Contents

1. [Form Configuration](_sections.md#1-form-configuration) - **CRITICAL**
   - 1.1 [Always Provide defaultValues for Form Initialization](formcfg-default-values.md) - CRITICAL (prevents undefined state bugs and enables reset() functionality)
   - 1.2 [Avoid useForm Return Object in useEffect Dependencies](formcfg-useeffect-dependency.md) - CRITICAL (prevents infinite render loops)
   - 1.3 [Enable shouldUnregister for Dynamic Form Memory Efficiency](formcfg-should-unregister.md) - HIGH (reduces memory usage for forms with frequently mounted/unmounted fields)
   - 1.4 [Consider reValidateMode for Expensive Validation](formcfg-revalidate-mode.md) - MEDIUM (trade-off between immediate corrective feedback and validation cost)
   - 1.5 [Understand That register's disabled Prop Clears the Value](formcfg-disabled-prop.md) - MEDIUM (prevents lost field values and silently skipped validation)
   - 1.6 [Use Async defaultValues for Server Data](formcfg-async-default-values.md) - CRITICAL (eliminates manual useEffect reset patterns)
   - 1.7 [Use onSubmit Mode for Optimal Performance](formcfg-validation-mode.md) - CRITICAL (prevents re-renders on every keystroke)
2. [Field Subscription](_sections.md#2-field-subscription) - **CRITICAL**
   - 2.1 [Avoid Calling watch() in Render for One-Time Reads](sub-avoid-watch-in-render.md) - HIGH (prevents unnecessary subscriptions and re-renders)
   - 2.2 [Combine useWatch with getValues for Timing Safety](sub-usewatch-with-getvalues.md) - HIGH (prevents missed updates due to subscription timing)
   - 2.3 [Provide defaultValue to useWatch for Initial Render](sub-usewatch-default-value.md) - MEDIUM-HIGH (prevents undefined flash on initial render)
   - 2.4 [Subscribe Deep in Component Tree Where Data Is Needed](sub-deep-subscription.md) - CRITICAL (prevents parent re-renders from propagating to unrelated children)
   - 2.5 [Use subscribe() to React to Form Changes Outside the React Lifecycle](sub-subscribe-outside-react.md) - HIGH (zero re-renders for non-UI consumers like analytics, autosave, telemetry)
   - 2.6 [Use useFormContext Sparingly for Deep Nesting](sub-useformcontext-sparingly.md) - MEDIUM (reduces prop drilling but increases implicit dependencies)
   - 2.7 [Use useWatch Instead of watch for Isolated Re-renders](sub-usewatch-over-watch.md) - CRITICAL (reduces re-renders by 10-50× in complex forms with multiple watchers)
   - 2.8 [Watch Specific Fields Instead of Entire Form](sub-watch-specific-fields.md) - CRITICAL (reduces re-renders from N fields to 1 field change)
3. [Controlled Components](_sections.md#3-controlled-components) - **HIGH**
   - 3.1 [Avoid Double Registration with useController](ctrl-avoid-double-registration.md) - HIGH (prevents duplicate state management and validation bugs)
   - 3.2 [Combine Local State with useController for UI-Only State](ctrl-local-state-combination.md) - MEDIUM (reduces form re-renders by 50%+ when UI state changes don't affect form data)
   - 3.3 [Use Single useController Per Component](ctrl-single-usecontroller-per-component.md) - MEDIUM-HIGH (prevents prop name collisions and simplifies component logic)
   - 3.4 [Isolate Controlled Inputs in Dedicated Child Components](ctrl-usecontroller-isolation.md) - HIGH (reduces re-renders from O(n) to O(1) per field change)
   - 3.5 [Wire Controller Field Props Correctly for UI Libraries](ctrl-controller-field-props.md) - HIGH (prevents form binding bugs and eliminates silent failures in 100% of UI library integrations)
4. [Validation Patterns](_sections.md#4-validation-patterns) - **HIGH**
   - 4.1 [Access Errors via Optional Chaining or Lodash Get](valid-error-message-strategy.md) - MEDIUM-HIGH (prevents runtime errors from undefined nested properties)
   - 4.2 [Consider Native Validation for Simple Forms](valid-native-validation.md) - MEDIUM (reduces JavaScript validation overhead for basic constraints)
   - 4.3 [Define Schema Outside Component for Resolver Caching](valid-resolver-caching.md) - HIGH (prevents schema recreation on every render)
   - 4.4 [Prefer Resolver Over Inline Validation for Complex Rules](valid-inline-vs-resolver.md) - HIGH (centralizes validation logic and enables type inference)
   - 4.5 [Surface Server Errors via setError('root.serverError', ...)](valid-server-errors.md) - HIGH (prevents lost server-side validation errors and unrecoverable form state)
   - 4.6 [Use delayError to Debounce Rapid Error Display](valid-delay-error.md) - MEDIUM (reduces UI flicker during fast typing validation)
   - 4.7 [Use Schema Factory for Dynamic Validation](valid-dynamic-schema-factory.md) - HIGH (enables context-dependent validation without render-time schema creation)
5. [Field Arrays](_sections.md#5-field-arrays) - **MEDIUM-HIGH**
   - 5.1 [Provide Complete Default Objects for Field Array Operations](array-complete-default-objects.md) - HIGH (prevents partial data and validation failures)
   - 5.2 [Separate Sequential Field Array Operations](array-separate-crud-operations.md) - MEDIUM-HIGH (prevents state corruption from batched mutations)
   - 5.3 [Use field.id as Key in useFieldArray Maps](array-use-field-id-as-key.md) - MEDIUM-HIGH (prevents state corruption and unnecessary re-renders)
   - 5.4 [Use FormProvider for Virtualized Field Arrays](array-virtualization-formprovider.md) - MEDIUM (maintains field state when rows exit/enter viewport)
   - 5.5 [Use Single useFieldArray Instance Per Field Name](array-unique-fieldarray-per-name.md) - MEDIUM-HIGH (prevents state conflicts from duplicate subscriptions)
6. [State Management](_sections.md#6-state-management) - **MEDIUM**
   - 6.1 [Avoid isValid with onSubmit Mode for Button State](formstate-avoid-isvalid-with-onsubmit.md) - MEDIUM (prevents validation on every render for button disabled state)
   - 6.2 [Destructure formState Properties Before Render](formstate-destructure-formstate.md) - MEDIUM (enables Proxy subscription optimization)
   - 6.3 [Subscribe to Specific Field Names in useFormState](formstate-subscribe-to-specific-fields.md) - MEDIUM (reduces re-renders to only relevant field changes)
   - 6.4 [Use getFieldState for Single Field State Access](formstate-getfieldstate-for-single-field.md) - MEDIUM (avoids subscription overhead for one-time state reads)
   - 6.5 [Use useFormState for Isolated State Subscriptions](formstate-useformstate-isolation.md) - MEDIUM (prevents parent re-renders from state access in children)
   - 6.6 [Wrap Async Submit Handlers in try/catch and Reset on isSubmitSuccessful](formstate-async-submit-lifecycle.md) - HIGH (prevents stuck isSubmitting state and missing post-success reset)
7. [Integration Patterns](_sections.md#7-integration-patterns) - **MEDIUM**
   - 7.1 [Transform Values at Controller Level for Type Coercion](integ-value-transform.md) - MEDIUM (prevents type coercion bugs in 100% of numeric/date form fields)
   - 7.2 [Use Controller for Material-UI Components](integ-mui-controller-pattern.md) - MEDIUM (maintains controlled component behavior with proper event handling)
   - 7.3 [Verify shadcn Form Component Import Source](integ-shadcn-form-import.md) - MEDIUM (prevents silent component mismatch bugs)
   - 7.4 [Wire shadcn Select with onValueChange Instead of Spread](integ-shadcn-select-wiring.md) - MEDIUM (prevents 100% of silent select binding failures with Radix-based components)
8. [Advanced Patterns](_sections.md#8-advanced-patterns) - **LOW**
   - 8.1 [Create Test Wrapper with QueryClient and AuthProvider](adv-testing-wrapper.md) - LOW (enables proper hook testing with required context providers)
   - 8.2 [Disable DevTools in Production and During Performance Testing](adv-devtools-performance.md) - LOW (eliminates DevTools overhead during profiling)
   - 8.3 [Wrap FormProvider Children with React.memo](adv-formprovider-memo.md) - LOW (prevents cascade re-renders from FormProvider state updates)

---

## References

1. [https://react-hook-form.com/docs](https://react-hook-form.com/docs)
2. [https://react-hook-form.com/advanced-usage](https://react-hook-form.com/advanced-usage)
3. [https://react-hook-form.com/docs/useform](https://react-hook-form.com/docs/useform)
4. [https://react-hook-form.com/docs/useform/subscribe](https://react-hook-form.com/docs/useform/subscribe)
5. [https://react-hook-form.com/docs/useform/seterror](https://react-hook-form.com/docs/useform/seterror)
6. [https://react-hook-form.com/docs/useform/formstate](https://react-hook-form.com/docs/useform/formstate)
7. [https://react-hook-form.com/docs/usewatch](https://react-hook-form.com/docs/usewatch)
8. [https://react-hook-form.com/docs/usecontroller](https://react-hook-form.com/docs/usecontroller)
9. [https://react-hook-form.com/docs/usefieldarray](https://react-hook-form.com/docs/usefieldarray)
10. [https://react-hook-form.com/docs/useformstate](https://react-hook-form.com/docs/useformstate)
11. [https://github.com/react-hook-form/resolvers](https://github.com/react-hook-form/resolvers)
12. [https://ui.shadcn.com/docs/components/form](https://ui.shadcn.com/docs/components/form)

---

## Source Files

This document was compiled from individual reference files. For detailed editing or extension:

| File | Description |
|------|-------------|
| [references/_sections.md](_sections.md) | Category definitions and impact ordering |
| [assets/templates/_template.md](../assets/templates/_template.md) | Template for creating new rules |
| [SKILL.md](source-skill.md) | Quick reference entry point |
| [metadata.json](metadata.json) | Version and reference URLs |